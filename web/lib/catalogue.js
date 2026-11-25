export const URL='https://iienmodlgutwtkadbjhp.supabase.co';
export const KEY='sb_publishable_gx1hnXgmKudHz6FPiquWnw_WB4PT9aH';
export async function read(path){const r=await fetch(URL+'/rest/v1/'+path,{headers:{apikey:KEY},cache:'no-store'});if(!r.ok)throw Error('Catalogue unavailable');return r.json();}
export function imageUrl(path){return URL+'/storage/v1/object/public/catalogue-images/'+path.split('/').map(encodeURIComponent).join('/');}
export async function loadCatalogue(){const [p,c,i,s,b]=await Promise.all([read('products?select=*&order=sort_order'),read('categories?select=*&order=sort_order'),read('product_images?select=*&order=sort_order'),read('shop_settings?id=eq.1&select=*'),read('recipe_books?select=*')]);return {products:p.map((x)=>({id:x.id,name:x.name,category:c.find((y)=>y.id===x.category_id)?.name||'',cents:x.price_cents,detail:x.serving_line,description:x.description,featured:x.featured,image:i.find((y)=>y.product_id===x.id)?.storage_path})),categories:c.map((x)=>x.name),settings:s[0]||{},books:b};}

export const money=n=>n==null?'Price on request':new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n/100);
export const slug=p=>p.id+'--'+p.name.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const siteUrl=()=>process.env.SITE_URL|| (process.env.VERCEL_PROJECT_PRODUCTION_URL?'https://'+process.env.VERCEL_PROJECT_PRODUCTION_URL:'http://localhost:3000');
export const wa=(number,message)=>/^[1-9][0-9]{7,14}$/.test(number||'')?'https://wa.me/'+number+'?text='+encodeURIComponent(message):null;
