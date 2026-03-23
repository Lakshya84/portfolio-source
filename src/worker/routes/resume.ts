import { Hono } from 'hono';

const resumeRouter = new Hono<{ Bindings: Env }>();

const RESUME_KEY = 'resume/current.pdf';

resumeRouter.post('/upload', async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return c.json({ success: false, error: 'No file provided' }, 400);
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
      return c.json({ success: false, error: 'Only PDF files are allowed' }, 400);
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return c.json({ success: false, error: 'File size must be less than 5MB' }, 400);
    }

    // Upload to R2
    const arrayBuffer = await file.arrayBuffer();
    await c.env.R2_BUCKET.put(RESUME_KEY, arrayBuffer, {
      httpMetadata: {
        contentType: 'application/pdf',
        contentDisposition: `attachment; filename="${file.name}"`,
      },
    });

    return c.json({ 
      success: true, 
      message: 'Resume uploaded successfully' 
    });
  } catch (error) {
    console.error('Error uploading resume:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to upload resume' 
    }, 500);
  }
});

resumeRouter.get('/download', async (c) => {
  try {
    const object = await c.env.R2_BUCKET.get(RESUME_KEY);

    if (!object) {
      return c.json({ success: false, error: 'Resume not found' }, 404);
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('etag', object.httpEtag);

    return c.body(object.body, { headers });
  } catch (error) {
    console.error('Error downloading resume:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to download resume' 
    }, 500);
  }
});

resumeRouter.get('/check', async (c) => {
  try {
    const object = await c.env.R2_BUCKET.head(RESUME_KEY);
    
    return c.json({ 
      exists: !!object,
      uploaded: object?.uploaded.toISOString() || null
    });
  } catch (error) {
    console.error('Error checking resume:', error);
    return c.json({ exists: false, uploaded: null });
  }
});

export default resumeRouter;
