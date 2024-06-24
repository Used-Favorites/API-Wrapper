// Importa o cliente Prisma e os tipos gerados
import {
  User,
  Andreess,
  AuditTrail,
  Cart,
  Category,
  Datasheets,
  PrismaClient,
  PrismaPromise,
  Products,
  Yolo,
  YoloImages,
  YoloTraining,
  supplier,
} from "@prisma/client";

// Exportar os tipos para um arquivo interface que será enviado atráves de um http pelo express.js

export interface ITypes {
  User: User;
  Andreess: Andreess;
  AuditTrail: AuditTrail;
  Cart: Cart;
  Category: Category;
  Datasheets: Datasheets;
  Products: Products;
  Yolo: Yolo;
  YoloImages: YoloImages;
  YoloTraining: YoloTraining;
  supplier: supplier;
}
