import type { ProjectType } from "@/@types/project.type";
import { MODES, type ModeType } from "@/config/mode";
import Joi from "joi";

const modeFormat = new Intl.ListFormat("en", {
  style: "long",
  type: "disjunction",
});

const modeSchema = Joi.string()
  .valid(...MODES)
  .default("dev" as ModeType)
  .messages({
    "any.only": `Role must be one of: ${modeFormat.format(MODES)}`,
  });

const nameSchema = Joi.string().trim();
const locationSchema = Joi.string().trim();

const projectSchema = Joi.object<
  Pick<ProjectType, "location" | "name" | "mode">
>({
  name: nameSchema.required(),
  location: locationSchema.required(),
  mode: modeSchema,
});
export { projectSchema };
