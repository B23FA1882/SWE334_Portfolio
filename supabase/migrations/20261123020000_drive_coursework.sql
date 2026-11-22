alter table public.portfolio_projects
  drop constraint portfolio_projects_live_url_check,
  add constraint portfolio_projects_live_url_check
  check (live_url is null or live_url like 'https://%' or live_url = '/projects/drive/');

update public.portfolio_projects
set title = 'Drive. · WEB231 Midterm',
    category = 'Веб дизайн',
    description = 'Автомашины туршилтын жолоодлогод зориулсан танилцуулга. Машины төрлүүд, жолоочдын түүх, машин болон байршил сонгох маягтыг HTML, CSS, JavaScript-аар бүтээсэн.',
    tags = array['HTML', 'CSS', 'JavaScript'],
    source_url = 'https://github.com/B23FA1882/SWE334_Portfolio/tree/main/public/projects/drive',
    live_url = '/projects/drive/',
    sort_order = 3
where slug = 'web231';

update public.portfolio_projects set sort_order = 4 where slug = 'figma-profile';
