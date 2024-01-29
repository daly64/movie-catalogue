import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Logo } from '../../components/logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  No: number;
  Title: string;
  Genre: string;
  Director: string;
  AvgRate: number;
  Actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    No: 1,
    Title: 'Title1',
    Genre: 'Genre1',
    Director: 'Director1',
    AvgRate: 1,
    Actions: '',
  },
  {
    No: 2,
    Title: 'Title2',
    Genre: 'Genre2',
    Director: 'Director2',
    AvgRate: 2,
    Actions: '',
  },
  {
    No: 3,
    Title: 'Title3',
    Genre: 'Genre3',
    Director: 'Director3',
    AvgRate: 3,
    Actions: '',
  },
  {
    No: 4,
    Title: 'Title4',
    Genre: 'Genre4',
    Director: 'Director4',
    AvgRate: 4,
    Actions: '',
  },
];
@Component({
  selector: 'board-page',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    Logo,
  ],
  templateUrl: './board-page.component.html',
  styleUrl: './board-page.component.css',
})
export class BoardPage {
  displayedColumns: string[] = [
    'No',
    'Title',
    'Genre',
    'Director',
    'AvgRate',
    'Actions',
  ];
  dataSource = ELEMENT_DATA;
}
