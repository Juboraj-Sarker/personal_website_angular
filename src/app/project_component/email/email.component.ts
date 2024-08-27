import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  private myDate: Date = new Date();

  public firstName : any = "";
  public lastName : any = "";
  public universityName : any = "";
  public field : any = "";
  public researchArea : any = "";

  public emailSubject1 : any = "";
  public emailSubject2 : any = "";
  public emailTitle : any = "";
  public emailPara1 : any = "";
  public emailPara2 : any = "";
  public emailPara3 : any = "";
  public emailPara4 : any = "";
  public emailPara5 : any = "";

  public emailSignature1 : any = "";
  public emailSignature2 : any = "";
  public emailSignature3 : any = "";
  public emailSignature4 : any = "";
  public emailSignature5 : any = "";
  public emailSignature6 : any = "";
  public emailSignature7 : any = "";

  public constructor(){

  }

  public generateEmail(){
    var date1 = this.addDays(1);
    var date2= this.addDays(2);
    var date3 = this.addDays(3);

    this.emailSubject1 = "Subject 1: Prospective Graduate student at Computer Science Department.";
    this.emailSubject2 = "Subject 2: Interested Graduate student at your Department.";
    
    this.emailTitle = "Dear Professor " + this.lastName + ",";

    this.emailPara1 = "I hope this email finds you well. My name is JUBORAJ SARKER and I am a Master's student in the Computer Science department. I've done my graduation in Computer Science and Engineering from Daffodil International University (DIU). Here I've completed some major courses including Structured Programming (C), Object Oriented Programming (Java), Data Structure, Database, Algorithms, Computer Networking, Network Security, Operating System, Software Engineering, Artificial Intelligence and many more. "
    this.emailPara1 = this.emailPara1 + "I'm very much interested in " + this.field + " and I am reaching out to seek your expertise.";

    this.emailPara2 = "Professor, your work in " + this.researchArea + " has been particularly inspiring to me, and I believe your guidance could be invaluable as I am very much interested in " + this.field + ". That's why I am reaching you out.";

    this.emailPara3 = "I have a certification in Mobile Application Development (Android) from George Washington University, USA. I was awarded as the best Mobile Application Developer in 'LICT Best Project Award (Android)- 2018' from the Bangladesh Government. ";
    this.emailPara3 = this.emailPara3 + "After my graduation I started my career as an Executive-IT (Mobile Application Development) position in City Group in 2019. There I developed some complex and interactive applications for City Group. I learned Database Oracle-12C while working at City Group. Also usage of PL/SQL and REST API development using dotNET was my biggest achievement at City Group. "
    this.emailPara3 = this.emailPara3 + "Currently I am working for Dhaka North City Corporation (DNCC) as an Assistant Maintenance Engineer. DNCC is a Local Government organization which is equivalent to a County based in the USA. Here I have developed 'DNCC Smart Recruitment System', 'DNCC Revenue Data Collection System', 'Citizens Engagement Platform' and many outstanding projects. "
    this.emailPara3 = this.emailPara3 + "Also I have attended many crucial training sessions. In January 2023, I visited Miami Dade County, Miami, Florida with the honorable Mayor of DNCC to attend a training titled 'Miami-Dade county municipal exchange'."

    this.emailPara4 = "Finally, I think I am a strong candidate for this department at " + this.universityName + ". I would greatly appreciate the opportunity to meet with you at your convenience to discuss this further. I am available on " + date1 + ", "  + date2 + " & " + " " + date3 + " ";
    this.emailPara4 = this.emailPara4 + "but I am flexible and willing to adjust to fit your schedule."

    this.emailPara5 = "Thank you for considering my request. I look forward to the possibility of learning from your insights and experience."

    this.emailSignature1 = "------------------------------------------";
    this.emailSignature2 = "Warm regards,";
    this.emailSignature3 = "JUBORAJ SARKER";
    this.emailSignature4 = "Master's Student, Computer Science";
    this.emailSignature5 = "Daffodil International University (DIU)";
    this.emailSignature6 = "Email: juborajsarker001@gmail.com";
    this.emailSignature7 = "Website: www.juborajsarker.com";
  }


  private addDays(addDays : any){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.myDate = new Date();
    this.myDate.setDate( this.myDate.getDate() + addDays );
    
    var day = this.myDate.getDate();
    var monthDigit = this.myDate.getMonth();
    var month = monthNames[monthDigit];
    return month + " " + day;
  }

}
