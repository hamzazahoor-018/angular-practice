import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const route = inject(ActivatedRoute);

export class DetailsComponent {
  id = route.snapshot.params['id'];
}


// import { Component, signal, inject } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { map } from 'rxjs/operators';

// const route = inject(ActivatedRoute);

// export class DetailsComponent {
//   id$ = route.paramMap.pipe(map(m => m.get('id')));
// }