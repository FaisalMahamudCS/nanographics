'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY } from '@/constants/company'
import { FadeIn } from '@/components/animations/fade-in'
import { SectionHeader } from '@/components/common/section-header'
import { Button } from '@/components/ui/button'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    console.log('Contact form:', data)
    reset()
    alert('Thank you! We will get back to you within 24 hours.')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            {...register('name')}
            className="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand-blue/50"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand-blue/50"
            placeholder="you@company.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
          Company
        </label>
        <input
          id="company"
          {...register('company')}
          className="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand-blue/50"
          placeholder="Your company (optional)"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="w-full resize-none rounded-xl border border-white/10 bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand-blue/50"
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-xl bg-brand-blue text-white hover:bg-brand-blue/90 sm:w-auto sm:px-8"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

export function ContactPageContent() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build together"
          description="Book a discovery call or send us a message. We typically respond within 24 hours."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl border border-white/10 bg-card p-8">
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div className="rounded-2xl border border-white/10 bg-card p-8">
                <h3 className="font-heading text-lg font-semibold">Contact Information</h3>
                <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-brand-cyan" />
                    <a href={`mailto:${COMPANY.email}`} className="hover:text-foreground transition-colors cursor-pointer">
                      {COMPANY.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-brand-cyan" />
                    <a href={`tel:${COMPANY.phone}`} className="hover:text-foreground transition-colors cursor-pointer">
                      {COMPANY.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-brand-cyan" />
                    {COMPANY.address}
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-dashed border-white/15 bg-surface/50 p-8 text-center">
                <p className="text-sm font-medium text-foreground">Schedule a Call</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Calendly integration placeholder — connect your scheduling link here.
                </p>
              </div>

              <div className="rounded-2xl border border-dashed border-white/15 bg-surface/50 p-8 text-center">
                <p className="text-sm font-medium text-foreground">Office Location</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Google Maps embed placeholder — Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
