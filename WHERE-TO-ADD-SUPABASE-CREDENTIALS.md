# 🔥 WHERE TO ADD YOUR SUPABASE CREDENTIALS 🔥

## Open File: `bloodBank.html`

## Go to Lines: **621-622**

You will see:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';        // Example: 'https://xxxxxxxxxxxxx.supabase.co'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';  // Your anon/public key (starts with 'eyJ...')
```

## Replace with YOUR actual credentials:

```javascript
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-actual-key-here';
```

---

## 📋 HOW TO GET YOUR CREDENTIALS:

### Step 1: Go to Supabase
Visit: https://supabase.com

### Step 2: Open Your Project
Click on your project (or create a new one)

### Step 3: Get API Credentials
1. Click on **Settings** (gear icon) in the left sidebar
2. Click on **API** 
3. You'll see two things to copy:

   **A) Project URL** 
   - Copy the URL under "Project URL"
   - Example: `https://abcdefghijk.supabase.co`
   - Paste it into `SUPABASE_URL`

   **B) Anon/Public Key**
   - Scroll down to "Project API keys"
   - Copy the `anon` `public` key (NOT the service_role key!)
   - It's a long string starting with `eyJ...`
   - Paste it into `SUPABASE_ANON_KEY`

### Step 4: Save the File
Save `bloodBank.html` after adding your credentials

### Step 5: Create the Database Table
Follow the instructions in `supabase-setup.md` to create the database table

---

## 🎯 EXACT LOCATION IN FILE:

**File**: `d:\final\bloodBank.html`  
**Lines**: 621-622  
**Section**: Look for the comment "🔥 SUPABASE CONFIGURATION - CHANGE HERE! 🔥"

---

## ✅ AFTER ADDING CREDENTIALS:

Your code should look like:

```javascript
// ========================================
// 🔥 SUPABASE CONFIGURATION - CHANGE HERE! 🔥
// ========================================

// ⚠️ IMPORTANT: Replace these with YOUR actual Supabase credentials
// Get them from: https://supabase.com → Your Project → Settings → API

const SUPABASE_URL = 'https://abcdefghijk.supabase.co';  // ✅ Your actual URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';  // ✅ Your actual key
```

---

## 🚀 THAT'S IT!

Once you add these two values, your Blood Bank system will:
- ✅ Save donations to Supabase database
- ✅ Load blood stock from database
- ✅ Show donor count and details
- ✅ Persist data across sessions

**Note**: Don't forget to create the database table using the SQL in `supabase-setup.md`!
