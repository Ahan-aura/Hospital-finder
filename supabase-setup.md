# Supabase Setup Guide for Blood Bank System

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - Project Name: `blood-bank-system`
   - Database Password: (choose a strong password)
   - Region: (choose closest to you)
5. Click "Create new project"

## Step 2: Create Database Table

1. In your Supabase project, go to **SQL Editor**
2. Click "New Query"
3. Paste the following SQL and click "Run":

```sql
-- Create blood_donations table
CREATE TABLE blood_donations (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  hospital VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  blood VARCHAR(10) NOT NULL,
  units INTEGER NOT NULL,
  contact VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index for faster queries
CREATE INDEX idx_blood_donations_blood ON blood_donations(blood);
CREATE INDEX idx_blood_donations_location ON blood_donations(location);
CREATE INDEX idx_blood_donations_created_at ON blood_donations(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE blood_donations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON blood_donations
  FOR SELECT USING (true);

-- Create policy to allow public insert access
CREATE POLICY "Allow public insert access" ON blood_donations
  FOR INSERT WITH CHECK (true);

-- Insert sample data
INSERT INTO blood_donations (name, hospital, location, blood, units, contact) VALUES
  ('John Doe', 'Apollo Hospital', 'Hyderabad', 'A+', 12, '040-5551234'),
  ('Jane Smith', 'Yashoda Hospital', 'Secunderabad', 'O+', 20, '040-6664321'),
  ('Mike Johnson', 'KIMS Hospital', 'Vijayawada', 'B+', 15, '0866-2345678'),
  ('Sarah Williams', 'CMC Hospital', 'Guntur', 'A-', 8, '0863-3344556'),
  ('David Brown', 'NIMS Hospital', 'Hyderabad', 'AB+', 5, '040-7788990'),
  ('Emily Davis', 'Rainbow Hospital', 'Tirupati', 'O-', 3, '0877-5566778'),
  ('Robert Miller', 'SVIMS Hospital', 'Tirupati', 'B-', 6, '0877-3322110'),
  ('Lisa Wilson', 'Care Hospital', 'Guntur', 'AB-', 2, '0863-9988776');
```

## Step 3: Get Your Supabase Credentials

1. Go to **Project Settings** (gear icon in sidebar)
2. Click on **API**
3. Copy the following:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key** (under "Project API keys")

## Step 4: Update bloodBank.html

Replace these lines in `bloodBank.html`:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

With your actual credentials:

```javascript
const SUPABASE_URL = 'https://xxxxxxxxxxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

## Features Implemented:

✅ **Donate Blood** - Saves donation data to Supabase database
✅ **Check Availability** - Searches blood stock from database
✅ **View All Stock** - Displays all blood inventory from database
✅ **Blood Donors List** - Shows all donors with count and details
✅ **Real-time Updates** - Data persists across sessions
✅ **Error Handling** - Graceful fallback if database is unavailable

## Database Schema:

| Column     | Type      | Description                |
|------------|-----------|----------------------------|
| id         | BIGSERIAL | Primary key (auto)         |
| name       | VARCHAR   | Donor name                 |
| hospital   | VARCHAR   | Hospital/Organization      |
| location   | VARCHAR   | City/Location              |
| blood      | VARCHAR   | Blood group (A+, O-, etc.) |
| units      | INTEGER   | Units available            |
| contact    | VARCHAR   | Contact number             |
| created_at | TIMESTAMP | Donation date/time         |

## Security:

- Row Level Security (RLS) enabled
- Public read access for transparency
- Public insert access for donations
- All data validated before insertion
