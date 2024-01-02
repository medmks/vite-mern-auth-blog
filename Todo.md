//TODO : SETTING THE SupaBase account and get Api Key
While Uploading the image I got this Error :
//BUG:  message: "new row violates row-level security policy"
Fix the problem by add new policie in SQL Editor section the Query code is:

create policy "Public Access Bucket Images Get"
on storage.objects for select
using ( bucket_id = 'YOUR-BUCKET-NAME' );

create policy "Public Access Bucket Images Post"
on storage.objects for insert
with check ( bucket_id = 'YOUR-BUCKET-NAME' );
//TODO: Add the textarea blog Title




//TODO: Setting Google Authentication 
