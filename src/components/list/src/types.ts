export interface ListItem{
    avatar?: string;
    title?: string;
    description?: string;
    time?: string;
    tag?: string;
    tagType?: "" | "primary" | "success" | "warning" | "danger" | "info";
}

export interface ListOptions{
    title: string;
    content: ListItem[];
}

export interface ActionOptions{
    title: string;
    icon?: string;
}