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
