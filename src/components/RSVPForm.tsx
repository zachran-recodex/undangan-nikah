import React, { useState } from 'react';
import { validateEmail, validatePhone } from '../utils/helpers';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  attendance: 'both' | 'ceremony' | 'reception' | 'unable';
  guests: number;
  dietaryRestrictions: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  attendance?: string;
}

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    attendance: 'both',
    guests: 1,
    dietaryRestrictions: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.attendance) {
      newErrors.attendance = 'Please select your attendance status';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - in a real app, this would submit to a backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll just show success
      setIsSubmitted(true);
      console.log('RSVP Data:', formData);
      
    } catch (error) {
      console.error('Error submitting RSVP:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Your RSVP has been successfully submitted. We can't wait to celebrate with you!
        </p>
        <p className="text-sm text-gray-500">
          You should receive a confirmation email shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="attendance" className="block text-sm font-medium text-gray-700 mb-2">
            Will you be attending? *
          </label>
          <select
            id="attendance"
            name="attendance"
            value={formData.attendance}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
              errors.attendance ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="both">Both ceremony and reception</option>
            <option value="ceremony">Ceremony only</option>
            <option value="reception">Reception only</option>
            <option value="unable">Unable to attend</option>
          </select>
          {errors.attendance && (
            <p className="mt-1 text-sm text-red-600">{errors.attendance}</p>
          )}
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Guests (including yourself)
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4 Guests</option>
            <option value={5}>5 Guests</option>
          </select>
        </div>

        <div>
          <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-2">
            Dietary Restrictions or Allergies
          </label>
          <textarea
            id="dietaryRestrictions"
            name="dietaryRestrictions"
            value={formData.dietaryRestrictions}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Please let us know about any dietary restrictions or allergies"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message for the Couple
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="Share your thoughts, wishes, or any special message for John & Jane"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary text-lg px-10 py-3 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RSVPForm;