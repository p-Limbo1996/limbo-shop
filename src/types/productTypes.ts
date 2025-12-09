export interface IProduct {
  id?: string;               // uuid
  created_at?: string;       // timestamp with time zone
  name?: string;            // text, nullable
  description?: string;     // text, nullable
  price?: number|null;           // numeric, nullable
  category_id?: number|null;     // numeric, nullable
  image_url?: string;       // text, nullable
}


export type TModalType="add"|"edit"|"delete";

