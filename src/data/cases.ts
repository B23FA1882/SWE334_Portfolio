export type Step = { title: string; body: string; file?: string }
export type CaseStudy = { headline: string; steps: Step[]; codeRoot?: string }

export const cases: Record<string, CaseStudy> = {
  greenroom: {
    headline: 'Тавиураас захиалга хүртэл',
    steps: [
      { title: 'Ургамал сонгох', body: 'Тавиур дээрх ургамлыг сонгоход React сонгосон ургамлын төлөвийг шинэчилнэ. Motion шилжилтээр тухайн ургамлын арчилгаа, үнэ дэлгэгдэнэ.', file: 'SWE334_Project_B23FA1882/src/components/PlantShelf.jsx' },
      { title: 'Сагс бүрдүүлэх', body: 'Сагсанд ургамлын ID болон тоо ширхэг хадгалагдана. Тоог өөрчлөхөд StoreProvider шинэ төлөвийг түгээж, сагсны жагсаалт ба нийлбэр шинэчлэгдэнэ.', file: 'SWE334_Project_B23FA1882/src/store/StoreProvider.jsx' },
      { title: 'Захиалга үүсгэх', body: 'place_order функц бүтээгдэхүүний үнийг баазаас уншиж, үлдэгдлийг шалгаад захиалгыг бүртгэдэг. Ингэснээр нийт дүнг сервер боддог.', file: 'SWE334_Project_B23FA1882/supabase/migrations/20261108000100_initial_plantstore.sql' },
    ],
  },
  'ism-museum': {
    headline: 'Архивыг он цаг болгон унших',
    steps: [
      { title: 'Баримт цуглуулах', body: 'Тэнхимийн түүхэн баримт болон арга хэмжээ өөр өөр бүтэцтэй. Time Machine тэдгээрийг он, гарчиг, тайлбартай бичлэг болгон нэгтгэдэг.', file: 'src/App.jsx' },
      { title: 'Шүүх, эрэмбэлэх', body: 'Зочин түүх эсвэл арга хэмжээний шүүлтүүр сонгоход filter() тохирох мөрүүдийг үлдээж, sort() оноор өсөх дараалалд оруулна.', file: 'src/App.jsx' },
      { title: 'Цомог нээх', body: 'Арга хэмжээний ID-гаар дэлгэрэнгүй хуудас нээгдэнэ. Зураг бүр event_id-аар тухайн арга хэмжээтэй холбогдоно.', file: 'supabase/schema.sql' },
    ],
  },
  'figma-profile': {
    headline: 'Кофе сонгох нүүр дэлгэц',
    steps: [
      { title: 'Нүүрээр аялах', body: 'Хайлтын талбарын доор кофены баннер, дараа нь хоёр баганатай бүтээгдэхүүний жагсаалт харагдана.' },
      { title: 'Доош гүйлгэх', body: 'Дээд болон доод цэс байрандаа үлдэж, бүтээгдэхүүний жагсаалт тусдаа гүйнэ. Доод хэсэгт өнөөдрийн санал, сүүлд үзсэн кофе бий.' },
      { title: 'Прототип турших', body: '«Прототип нээх» товчоор Figma дахь нүүр дэлгэцээс эхлэн дэлгүүрийн бусад дэлгэц рүү шилжиж үзнэ.' },
    ],
  },
  web231: {
    headline: 'Зураг, зохиомж, сонголт',
    codeRoot: 'https://github.com/B23FA1882/SWE334_Portfolio/blob/main/public/projects/drive/',
    steps: [
      { title: 'Нүүрийг зохиох', body: 'Hero хэсэгт машины гэрэл зургийг CSS background-аар байрлуулаад Test drive гэсэн текст, товчийг давхарласан. Хэсгүүдийг HTML-ээр тусад нь бүлэглэсэн.', file: 'index.html' },
      { title: 'Цомог өрөх', body: 'Possibilities хэсэг зургаан төрлийн картыг харуулна. Stories хэсэгт зургууд CSS Grid-ээр өрөгдөж, дэлгэц нарийсахад баганын тоо цөөрнө.', file: 'src/style.css' },
      { title: 'Сонголт хийх', body: 'Машин, байршлын жагсаалтыг JavaScript нээнэ. Утга сонгоход selectOption харагдах текстийг шинэчилж цэсийг хаана. Демо нь жинхэнэ захиалга илгээхгүй.', file: 'index.html' },
    ],
  },
}
