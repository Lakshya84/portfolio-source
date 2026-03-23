import { Hono } from 'hono';
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';

const contactRouter = new Hono<{ Bindings: Env }>();

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

contactRouter.post('/send', zValidator('json', contactSchema), async (c) => {
  const { name, email, message } = c.req.valid('json');

  const serviceId = c.env.EMAILJS_SERVICE_ID;
  const templateId = c.env.EMAILJS_TEMPLATE_ID;
  const publicKey = c.env.EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return c.json(
      {
        success: false,
        error: 'Email service not configured. Please set up EmailJS credentials.',
      },
      500
    );
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          message: message,
          to_name: 'Lakshya Pandey',
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('EmailJS error:', errorText);
      return c.json(
        {
          success: false,
          error: 'Failed to send email. Please try again later.',
        },
        500
      );
    }

    return c.json({
      success: true,
      message: 'Email sent successfully!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return c.json(
      {
        success: false,
        error: 'Failed to send email. Please try again later.',
      },
      500
    );
  }
});

export default contactRouter;
