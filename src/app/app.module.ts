import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BoardComponent } from './board/board.component';
import { BoardService } from './board/services/board.service';

import { TasksListComponent } from './tasks/tasks.list.component';
import { TaskComponent } from './tasks/task.component';
import { TasksService } from './tasks/services/tasks.service';


@NgModule({
    declarations: [
        AppComponent,
        BoardComponent,
        TasksListComponent,
        TaskComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [BoardService, TasksService],
    bootstrap: [AppComponent]
})
export class AppModule {}
