create table public.portfolio_projects (
  slug text primary key,
  title text not null,
  category text not null,
  description text not null,
  tags text[] not null default '{}',
  source_url text not null check (source_url like 'https://%'),
  live_url text check (live_url like 'https://%'),
  sort_order integer not null,
  published boolean not null default false
);

alter table public.portfolio_projects enable row level security;
revoke all on public.portfolio_projects from public, anon, authenticated;
grant select on public.portfolio_projects to anon, authenticated;
create policy "Visitors can read published projects"
  on public.portfolio_projects for select to anon, authenticated
  using (published);

insert into public.portfolio_projects
  (slug, title, category, description, tags, source_url, live_url, sort_order, published)
values
  ('greenroom', 'GREENROOM', 'Цахим худалдаа', 'Оффистоо тохирох ургамлыг интерактив тавиураас сонгож, арчилгааны мэдээллийг уншаад сагслах дэлгүүр.', array['React', 'Supabase', 'Motion'], 'https://github.com/B23FA1882/SWE334_PlantStore', 'https://swe-334-plant-store.vercel.app', 1, true),
  ('ism-museum', 'ISM Digital Museum', 'Дижитал архив', 'СЭЗИС-ийн Мэдээллийн системийн менежментийн тэнхимийн түүх, багш нар, оюутны бүтээлийг нэг дороос үзэх музей.', array['React', 'Supabase', 'PostgreSQL'], 'https://github.com/B23FA1882/SWE334_ISMmuseum', 'https://swe334ismmuseum.vercel.app', 2, true),
  ('figma-profile', 'Хэрэглэгчийн мэдээлэл', 'Интерфэйс дизайн', 'Гар утсан дээр өөрийн бүртгэлийг унших, мэдээллээ шинэчлэх дэлгэцийн Figma загвар.', array['Figma', 'UI дизайн', 'Mobile'], 'https://www.figma.com/design/OBLNtmdLxOlF87WkaLtqko/Untitled?node-id=1-881', null, 3, true),
  ('web231', 'WEB231 Midterm', 'Хичээлийн архив', 'WEB231 хичээлийн явцын шалгалтын репозитор. Эх код, дэлгэцийн зураг нийтлэгдээгүй байна.', array['WEB231', 'GitHub'], 'https://github.com/B23FA1882/web231_midterm', null, 4, true);
