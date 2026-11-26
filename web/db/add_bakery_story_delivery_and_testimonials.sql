alter table public.shop_settings add column if not exists about_story text, add column if not exists delivery_details text, add column if not exists testimonials jsonb not null default '[]'::jsonb;
