import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypeOptions = [
    { value: 'full-stack', label: 'Full-Stack Development' },
    { value: 'frontend', label: 'Frontend Development' },
    { value: 'backend', label: 'Backend API Development' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'maintenance', label: 'Application Maintenance' },
    { value: 'other', label: 'Other' }
  ];

  const budgetOptions = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-30k', label: '$15,000 - $30,000' },
    { value: '30k-50k', label: '$30,000 - $50,000' },
    { value: 'over-50k', label: 'Over $50,000' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project description is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters describing your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate email sending (replace with actual EmailJS implementation)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
        <div className="text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" size={32} color="var(--color-success)" />
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Message Sent Successfully!
          </h3>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Thank you for reaching out! I've received your message and will get back to you within 24 hours. I'm excited to learn more about your project.
          </p>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-primary mb-3">
          Let's Build Something Amazing
        </h2>
        <p className="text-text-secondary leading-relaxed">
          Ready to bring your project to life? Fill out the form below and I'll get back to you within 24 hours 
          with a detailed proposal and timeline.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            error={errors.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Project Type"
            placeholder="Select project type"
            options={projectTypeOptions}
            value={formData.projectType}
            onChange={(value) => handleInputChange('projectType', value)}
            error={errors.projectType}
            required
          />

          <Select
            label="Budget Range"
            placeholder="Select budget range"
            options={budgetOptions}
            value={formData.budget}
            onChange={(value) => handleInputChange('budget', value)}
            error={errors.budget}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Project Description *
          </label>
          <textarea
            placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={6}
            className={`w-full px-4 py-3 rounded-lg border transition-all-300 resize-none ${
              errors.message 
                ? 'border-error focus:border-error focus:ring-error/20' :'border-border focus:border-accent focus:ring-accent/20'
            } focus:outline-none focus:ring-4`}
          />
          {errors.message && (
            <p className="mt-2 text-sm text-error flex items-center">
              <Icon name="AlertCircle" size={16} className="mr-1" />
              {errors.message}
            </p>
          )}
          <p className="mt-2 text-xs text-text-secondary">
            {formData.message.length}/500 characters
          </p>
        </div>

        {errors.submit && (
          <div className="p-4 bg-error/10 border border-error/20 rounded-lg">
            <p className="text-error text-sm flex items-center">
              <Icon name="AlertTriangle" size={16} className="mr-2" />
              {errors.submit}
            </p>
          </div>
        )}

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>

        <p className="text-xs text-text-secondary text-center">
          By submitting this form, you agree to receive communication about your project inquiry.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;