export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Telefone XL',
    price: 799,
    description: 'Um grande telefone com uma das melhores telas',
  },
  {
    id: 2,
    name: 'Telefone Mini',
    price: 699,
    description: 'Um ótimo telefone com uma das melhores câmeras',
  },
  {
    id: 3,
    name: 'Telefone Standard',
    price: 299,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
