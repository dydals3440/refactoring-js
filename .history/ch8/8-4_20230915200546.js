// 공통된 로직을 담고 있는 emitPhotoData라는 함수를 만들었는데, 시간이 지나면서 두가지 다른 곳에서 location을 출력하는 방식이 달라졌다.

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
  // 붙여넣어줌, emitPhotoData에서 뺸다음에, 호출하는 사람이 나중에 추가적으로 붙어줄수있도록 변경
  outStream.write(`<p>location: ${photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write('<div>\n');
      emitPhotoData(outStream, p);
      // 위치, 다른 태그를 이용해서 꾸며줌!
      outStream.write(`<p>위치!: ${photo.location}</p>\n`);
      outStream.write('</div>\n');
    });
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
  // outStream.write(`<p>location: ${photo.location}</p>\n`);
}

function renderPhoto(outStream, aPhoto) {
  outStream.write('');
}

function recentDateCutoff() {
  //7 days ago.
  return new Date().setDate(new Date().getDate() - 7);
}
