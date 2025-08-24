import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.galleryItem.createMany({
    data: [
      { title: "SENJA", category: "Beach", imageUrl: "/images/senja.jpg", caption: "Menikmati senja & debur ombak." },
      { title: "PERTEMUAN", category: "Beach", imageUrl: "/images/pertemuan.jpg", caption: "Laut & pantai bertemu." },
      { title: "KETENANGAN", category: "Mountain", imageUrl: "/images/ketenangan.jpg", caption: "Tenang di pegunungan." },
      { title: "KESUNYIAN", category: "Mountain", imageUrl: "/images/kesunyian.jpg", caption: "Sejuk & hening." },
      { title: "BUKAN KECANDUAN", category: "Mountain", imageUrl: "/images/bukan-kecanduan.jpg", caption: "Mencari ketenangan." },
      { title: "Graphic Design", category: "Design", imageUrl: "/images/design.jpg", caption: "Contoh karya desain." }
    ]
  });

  await prisma.skill.createMany({
    data: [
      { label: "HTML", percent: 68, type: "Technical" },
      { label: "PHOTOSHOP", percent: 72, type: "Technical" },
      { label: "JAVASCRIPT", percent: 50, type: "Technical" },
      { label: "CSS", percent: 70, type: "Technical" },
      { label: "Team Work", percent: 87, type: "Professional" },
      { label: "Creativity", percent: 72, type: "Professional" },
      { label: "Project Management", percent: 49, type: "Professional" },
      { label: "Communication", percent: 52, type: "Professional" }
    ]
  });

  await prisma.service.createMany({
    data: [
      { title: "Graphic Designer", description: "Loren ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam optio nisi perferendis animi dolores nostrum." },
      { title: "Web Designer", description: "Desain website modern & responsif." },
      { title: "UI/UX Developer", description: "Riset & prototyping pengalaman pengguna." }
    ]
  });
}

main().finally(() => prisma.$disconnect());
