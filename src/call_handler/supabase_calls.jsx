import { supabase } from './supabase_client'



const getFaqs = async () => {
    const query = supabase.from("faqs").select("*");
    const { data, error } = await query;

    if (error) {
        return [];
    } else {
        return data;
    }

}


const getReviews = async () => {
    const query = supabase.from("reviews").select("id, created_at, users(name, image), rating, comment").order("rating", { ascending: false }).limit(20);
    const { data, error } = await query;
    if (error) {
      return [];
    } else {
       
        return data;
    }
}

export default { getFaqs, getReviews };

