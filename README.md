# SWE334_Portfolio

Өнөрсайханы Баясгалан · СЭЗИС, Мэдээллийн системийн менежмент. Төслүүдийн нүүрэн тал болон цаад ажиллагааг хамтад нь үзүүлдэг хувийн портфолио.

[Портфолио нээх](https://sweportfolio-sigma.vercel.app/) · [GitHub репозитор](https://github.com/B23FA1882/SWE334_Portfolio)

## Бүтээлүүд

| Бүтээл | Портфолиод үзэх зүйл | Эх сурвалж |
| --- | --- | --- |
| GREENROOM · PlantStore | Төслийн өөрийн ургамлын зургууд, интерактив тавиур, сагс, захиалгын алхмууд | [Сайт](https://swe-334-plant-store.vercel.app) · [Код](https://github.com/B23FA1882/SWE334_PlantStore) |
| ISM Digital Museum | Тэнхимийн багш нарын зураг, Time Machine-ийн шүүлт ба он цагийн эрэмбэ | [Сайт](https://swe334ismmuseum.vercel.app) · [Код](https://github.com/B23FA1882/SWE334_ISMmuseum) |
| Хэрэглэгчийн мэдээлэл | 375 × 812 хэмжээтэй мобайл фрейм, нэр ба овгийг өөрчилж турших жишээ | [Figma фрейм](https://www.figma.com/design/OBLNtmdLxOlF87WkaLtqko/Untitled?node-id=1-881) |
| Drive. · WEB231 Midterm | Автомашины танилцуулга, зургаан төрлийн карт, Stories цомог болон сонголттой маягт | [Ажиллуулах](https://sweportfolio-sigma.vercel.app/projects/drive/) · [Демогийн эх код](public/projects/drive) · [Хичээлийн репозитор](https://github.com/B23FA1882/web231_midterm) |

## Бүтээлч санаа

«Гадаад төрх» горимд төслийн дүрслэл харагдана. «Дотор нь» горимд тухайн төслийн үйлдлүүдийг дарааллаар сонгож, жишээлбэл ургамал сагснаас захиалга болохдоо үнийг хаана шалгуулдгийг уншин код руу очиж болно. Мөн зочин хөргийн өнгө, сайтын горимыг сольж, Figma фрейм дотор нэр ба овгийг туршиж өөрчилнө.

## Технологи ба өгөгдөл

React, TypeScript, Vite, Tailwind CSS 4, Lucide, Supabase PostgreSQL / REST, Vercel. Фонт, хөрөг, бүтээлүүдийн зураг болон Figma-ийн дүрсүүдийг сайттай хамт ачаалдаг.

`useProjects()` нь нийтэд нээлттэй өгөгдлийн хуулбарыг шууд харуулаад `portfolio_projects` хүснэгтийн нийтэлсэн мөрүүдийг `sort_order`-оор уншина. Амжилттай хоосон хариунд хоосон төлөв гардаг. Сүлжээний хүсэлт тасарвал хуулбар хэрэглэгдэнэ. Хуулбарт зөвхөн нийтэд түгээх мэдээлэл хадгална. Бүтээлийг бүрэн хасахдаа хүснэгт болон багцалсан хуулбарыг хамтад нь шинэчилнэ.

Зочны эрх нь `SELECT` бөгөөд RLS нь `published = true` мөрүүдийг л уншуулна. `src/lib/public-config.ts` доторх браузерын publishable key нь нийтэд ашиглах зориулалттай. Backend админы түлхүүр шаардахгүй. Сонгосон төслийг солих бол `.env.example`-ийг `.env.local` болгон хуулж хоёр утгыг бөглөнө. Хоосон Supabase төсөлд зориулсан хүснэгт, дүрэм, эхний өгөгдөл `supabase/migrations` дотор бий.

## VS Code дээр ажиллуулах

Node.js 22.12 буюу түүнээс шинэ хувилбар ашиглана. `package.json` байгаа хавтсыг VS Code-оор нээж Terminal дээр ажиллуулна.

```powershell
npm ci
npm run dev
```

Vite-ийн хэвлэсэн Local хаягийг нээнэ. Production build шалгахдаа дараах командыг ашиглана.

```powershell
npm run build
npm run preview
```

Vercel дээр репозиторийн үндсэн хавтас нь root, build нь `npm run build`, гаралт нь `dist`.

## Кодыг хаанаас унших вэ?

| Файл | Хариуцах хэсэг |
| --- | --- |
| `src/App.tsx` | Үндсэн хэсгүүдийн дараалал |
| `src/components/ui/portfolio-hero.tsx` | Нэрийн анимэйшн, хөрөг ба танилцуулга |
| `src/components/Header.tsx` | Гар утасны цэс, өнгөний горим, localStorage |
| `src/components/Projects.tsx` | Хоёр харагдац, алхмын сонголт, дэлгэрэнгүй цонх |
| `src/components/FigmaScreen.tsx` | Сонгосон Figma фрейм, жишээ маягт |
| `src/components/BehindSite.tsx` | Сайтын талаарх асуулт, хариулт, холбогдох код |
| `src/lib/projects.ts` | Supabase уншилт, хүсэлтийг цуцлах ба нөөц өгөгдөл |
| `src/data/cases.ts` | Төслийн алхам бүрийн тайлбар, кодын зам |
| `src/styles.css` | Өнгө, үсгийн хэмжээ, responsive дүрэм, хөдөлгөөн багасгах тохиргоо |

## Эх сурвалж

- Нүүр хэсгийн хоёр мөр нэр, зууван хөрөг, өнгөний горимд ашигласан лавлагаа нь даалгаварт хавсаргасан `portfolio-hero.tsx` (ALEX KANE) компонент. [21st.dev](https://21st.dev/)
- Хөрөг, боловсрол, дадлага, клубийн мэдээлэл нь Ө. Баясгалангийн өөрийн CV-ээс. Нийтийн профайлд сургуулийн имэйл болон GitHub хаягийг ашиглав.
- GREENROOM-ийн ургамлын зургуудыг тухайн төслийн `PlantArt` компонентоос, музейн гэрэл зургийг өөрийн репозиториос авав. [PlantArt.jsx](https://github.com/B23FA1882/SWE334_PlantStore/blob/main/SWE334_Project_B23FA1882/src/components/PlantArt.jsx) · [Музейн зураг](https://github.com/B23FA1882/SWE334_ISMmuseum/blob/main/public/images/team.webp)
- Drive. төслийн эх HTML, CSS, JavaScript, автомашины зургуудыг зохиогчийн өгсөн WEB231_midterm_B23FA1882 ZIP-ээс авав. Демо хувилбарт нүүр зургийг WebP болгож, навигацын холбоос, картын дэлгэрэнгүй, жижиг дэлгэцийн өргөн, маягтын локал баталгаажуулалт нэмсэн. [Демогийн эх код](public/projects/drive)
- Профайл фреймийн байрлал, дүрсүүдийн эх загвар. [Figma](https://www.figma.com/design/OBLNtmdLxOlF87WkaLtqko/Untitled?node-id=1-881)
- Дүрс ба үсгийн сан. [Lucide](https://lucide.dev/) · [Barlow Condensed](https://fontsource.org/fonts/barlow-condensed) · [Inter](https://fontsource.org/fonts/inter)
- Код боловсруулах, туршихад ChatGPT Codex ашиглав.
