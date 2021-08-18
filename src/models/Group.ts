import { Entity } from "./Entity";

export interface Group extends Entity {
    name: string;
    description: string;
    group_image_url: string;
}