/*
  # Contact Form Database Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text)
      - `company` (text)
      - `message` (text, required)
      - `newsletter` (boolean)
      - `created_at` (timestamp)
      - `status` (text) - For tracking submission status
      - `type` (text) - Type of inquiry (general, investor, partner, farmer)

  2. Security
    - Enable RLS on contact_submissions table
    - Add policy for authenticated users to read their own submissions
    - Add policy for anon users to create submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  newsletter boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending',
  type text DEFAULT 'general',
  
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'in_progress', 'completed', 'archived')),
  CONSTRAINT valid_type CHECK (type IN ('general', 'investor', 'partner', 'farmer'))
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create submissions
CREATE POLICY "Anyone can create contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow users to read their own submissions (if authenticated)
CREATE POLICY "Users can read own submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (email = auth.email());

-- Create index for faster email searches
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);