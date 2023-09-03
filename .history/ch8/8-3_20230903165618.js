export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  // result.push(`<p>title: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

export function photoDiv(photo) {
  return [
    '<div>',
    // `<p>title: ${photo.title}</p>`,
    emitPhotoData(photo),
    '</div>',
  ].join('\n');
}

function emitPhotoData(aPhoto) {
  const result = [];
  console.log(aPhoto);
  // result.push(`<p>title: ${photo.person.title}</p>`);
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join('\n');
}

function renderPhoto(aPhoto) {
  return '';
}

console.log(renderPerson('Kim'));
