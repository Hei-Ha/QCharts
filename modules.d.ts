declare module "*.md" {
    const content: string;
    export default content;
}

declare module '*.less' {
    const resource: {[key: string]: string};
    export = resource;
}