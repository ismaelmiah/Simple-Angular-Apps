import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{

   @Output('featureClicked') featureSelected = new EventEmitter<string>();

    onSelect(feature: string){
        //console.log(feature);
        this.featureSelected.emit(feature);
    }
}