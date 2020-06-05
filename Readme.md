# YuanGao Personal Web Page Project
## Assignment of CS5610 Web Development in Northeastern University
This is the personal web page of Yuan. It tells you about Yuan's research, personal fun facts, and experience.
## Link
Click [here](https://yuangao-home.herokuapp.com) to view Yuan's web page!
## Screenshots
1. Home page of Yuan's personal web page.
![sc](/readmeImages/screenshot-home1.png)
![sc](/readmeImages/screenshot-home2.png)
2. Yuan's research
![sc](/readmeImages/screenshot-research1.png)
![sc](/readmeImages/screenshot-research2.png)
3. Some of Yuan's personal details
![sc](/readmeImages/screenshot-personal1.png)
![sc](/readmeImages/screenshot-personal2.png)
4. Yuan's resume
![sc](/readmeImages/screenshot-resume1.png)
![sc](/readmeImages/screenshot-resume2.png)
5. Contact info of Yuan
![sc](/readmeImages/screenshot-contact1.png)
![sc](/readmeImages/screenshot-contact2.png)
## Description of meeting homework requirements
* **Landing page** The landing page is shown as the first group of screenshots above, which is the content of ```index.html```. You should be able to get to different pages via the navigation bar on the top.
* **Navigation elements** The navigation bar on each page will direct you to different pages. The color and positioning are styled in CSS. As shown below, the navigation bar is still in sight even if you resize the window.
![nav](/readmeImages/screenshot-nav.png)
* **Internal links** The elements in the navigation bar, i.e., "YUAN'S", "Home", "Research", "Personal", "Resume" and "Contact" are linked with internal links to different pages: ```index.html```, ```research.html```, ```personal.html```, ```resume.html``` and ```contact.html```.
* **External links** There are some external links (all in light blue) such as the publications in Screenshot Group 2 and some links in Screenshot Group 5. They open up new browser tabs when clicked.
* **HTML table** In Screenshot Group 4, resume page, the resume is formatted using HTML table without border. The contents are presented in the first column of the table and the years are presented in the second column. Since the years are included in the publication content, there's no year column for all publications, so the publication entries span to two columns.
* **Interactive component** As shown below, when mouse moves onto one of the navigation elements (except "YUAN'S"), a border will appear around the text. When the mouse leaves the border is gone. This is realized using jQuery.
![navjs](/readmeImages/screenshot-navjs.png)
* **Responsiveness on various sized displays**  Used CSS media queries to adjust the look of the web page when resizing the window. See below:
  - Screen width 992px - 768px:
  ![navjs](/readmeImages/screenshot-resize1.png)
  - Screen size 768px - 600px:
  ![navjs](/readmeImages/screenshot-resize2.png)
  - Screen size 600px and below:
  ![navjs](/readmeImages/screenshot-resize3.png)
