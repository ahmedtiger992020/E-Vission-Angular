import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';
import { TranslateService } from "@ngx-translate/core";

export class PaginatorIntlService extends MatPaginatorIntl {
    translate: TranslateService

    lang = "ar";
    itemsPerPageLabel = this.getTranslated('label', this.lang);
    nextPageLabel = this.getTranslated('next', this.lang);
    previousPageLabel = this.getTranslated('prev', this.lang);
    lastPageLabel = this.getTranslated('last', this.lang);
    firstPageLabel = this.getTranslated('first', this.lang);
    getRangeLabel = function (page, pageSize, length) {
        const of =  this.lang == "ar" ? "من" : "of"
        
        if (length === 0 || pageSize === 0) {
            return '0 ' + of + ' ' + length;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ?
            Math.min(startIndex + pageSize, length) :
            startIndex + pageSize;
        return startIndex + 1 + ' - ' + endIndex + ' ' + of + ' ' + length;
    };

    injectTranslateService(translate: TranslateService) {
        this.translate = translate;

        this.translate.onLangChange.subscribe(() => {
            this.translateLabels();
        });

        this.translateLabels();
    }

    translateLabels() {
        this.itemsPerPageLabel = this.translate.instant('Item page');
        this.nextPageLabel = this.translate.instant('paginator.next_page');
        this.previousPageLabel = this.translate.instant('paginator.previous_page');
    }
    getTranslated(labelType: any, lan: string) {

        switch (labelType) {
            case "label":
                return lan == "ar" ? "عدد العناصر" : "Items Page"
            case "next":
                return lan == "ar" ? "التالي" : "Next"
            case "prev":
                return lan == "ar" ? "السابق" : "Prev"
            case "last":
                return lan == "ar" ? "الصفحة الأخيرة" : "Last Page"
            case "first":
                return lan == "ar" ? "الصفحة الأولي" : "First Page"
            default:
                break;
        }
    }


}