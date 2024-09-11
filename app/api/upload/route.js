import fs from 'fs';
import path from 'path';
import {sql} from '@vercel/postgres'



export async function POST(req){
    const user_data = JSON.parse(req.cookies.get("user_data")?.value)
    const patient_id = user_data.id
    
    

    const formData = await req.formData()

    const file = formData?.get("file")
    const description = formData?.get("description")
    const category = formData?.get("category")
    const f_name = file.name
    const f_size = file.size
    const f_type = file.type

    const uniqueFilename = Date.now() + '-' + file.name;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    try {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        await fs.promises.mkdir(uploadDir, { recursive: true });
        await fs.promises.writeFile(path.join(uploadDir, uniqueFilename), buffer);

        const result = sql`INSERT INTO medical_records (patient_id, file_name, file_type, file_size, description, category)
            VALUES (${patient_id}, ${f_name}, ${f_type}, ${f_size}, ${description}, ${category})`
        
        return Response.json({ message: 'File uploaded successfully', filename: uniqueFilename });
      } catch (error) {
        console.error('Error uploading file:', error);
        return Response.json({ error: 'Internal server error' });
      }

}