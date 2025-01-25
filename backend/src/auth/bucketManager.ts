import { supabase } from './supabaseClient';

export const uploadFile = async (bucketName: string, filePath: string, file: File | Blob) => {
    const { data, error } = await supabase.storage.from(bucketName).upload(filePath, file);

    if (error) {
        console.error('Error uploading file:', error);
        return null;
    }

    console.log('File uploaded successfully:', data);
    return data;
};

export const listFiles = async (bucketName: string, path: string = '') => {
    const { data, error } = await supabase.storage.from(bucketName).list(path);

    if (error) {
        console.error('Error listing files:', error);
        return null;
    }

    console.log('Files:', data);
    return data;
};

// export const getPublicUrl = (bucketName: string, filePath: string) => {
//     const { //publicUrl } = supabase.storage.from(bucketName).getPublicUrl(filePath);
//     return //publicUrl;
// };