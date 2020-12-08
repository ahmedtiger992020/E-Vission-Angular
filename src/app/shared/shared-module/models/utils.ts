import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../Components/confirm-dialog/confirm-dialog.component';
import { DialogData } from './dialog-data';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Utils {
    public static readonly DEFUALT_PAGE_SIZE = 10;
    public static readonly DEFUALT_PAGE_NUMBER = 1;
    public static readonly MAX_PAGE_SIZE = 1000;


    public static readonly Animations = trigger('detailExpand', [
        state(
            'collapsed',
            style({ height: '0px', minHeight: '0', visibility: 'collapse' })
        ),
        state('expanded', style({ height: '*', visibility: 'initial' })),
        transition(
            'expanded <=> collapsed',
            animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
        ),
    ]);

    public static readonly Animationsub = trigger('detailExpand', [
        state(
            'collapsed',
            style({ height: '0', minHeight: '0', display: 'none' })
        ),
        state('expanded', style({ height: '*', visibility: 'initial', })),
        transition(
            'expanded <=> collapsed',
            animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
        ),
    ]);

    public static readonly slideInOut = trigger('slideInOut', [
        state('in', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible', 'position': 'relative'
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden', 'position': 'absolute'
        })),
        transition('in => out', [group([
            animate('100ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('200ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('300ms ease-in-out', style({
                'visibility': 'hidden',
                'position': 'absolute'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('100ms ease-in-out', style({
                'visibility': 'visible',
                'position': 'relative'
            })),
            animate('200ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('600ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ])


    constructor(public dialog: MatDialog, private router: Router) {
    }


    public openDialogAfterSave(title, body, confirmBtnTxt, cancelBtntxt, listUrl, homePageUrl) {
        var dialogRef = this.openDialog(title, body, confirmBtnTxt, cancelBtntxt);
        dialogRef.afterClosed().subscribe(result => {
            this.router.navigateByUrl(result ? listUrl : homePageUrl);
        });
    }

    public openDialog(title, body, confirmBtnTxt, cancelBtntxt, extrabody?) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: {
                title: title,
                body: body,
                confirmBtnText: confirmBtnTxt,
                cancelBtntext: cancelBtntxt,
                extrabody: extrabody
            } as DialogData
        });
        return dialogRef;
    }

}