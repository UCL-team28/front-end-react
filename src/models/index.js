export class Note {
  constructor(id, date, name, category, content, media, mediaType) {
    this.id = id;
    this.date = date;
    this.name = name;
    this.category = category;
    this.content = content;
    this.media = media;
    this.mediaType = mediaType;
  }
}

export class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export class CreateNote {
  constructor(name, category, content, media, mediaType) {
    this.name = name;
    this.category = category;
    this.content = content;
    this.media = media;
    this.mediaType = mediaType;
  }
}

export class CreateCategory {
  constructor(name) {
    this.name = name;
  }
}
