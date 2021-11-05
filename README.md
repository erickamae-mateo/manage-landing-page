# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Style Guide](#Front-endStyleGuide)
)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)
![Screenshot 2021-11-05 at 16-08-17 Frontend Mentor Manage landing page](https://user-images.githubusercontent.com/88840940/140478660-d12a4862-892a-4c4b-8b91-56351bd855a2.png)


![Screenshot 2021-11-05 at 16-07-52 Frontend Mentor Manage landing page](https://user-images.githubusercontent.com/88840940/140478722-31acedd3-da44-456f-8ef6-89bc609c3762.png)


### Links

- Solution URL: [Solution: manage-landing-page](https://github.com/erickamae-mateo/manage-landing-page)
- Live Site URL: [Live site Manage-landing-page](https://erickamae-mateo.github.io/manage-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Basic CSS animation
- Vanilla JS
- jQuery plugin


### What I learned

It is easy to use the jQuery plugin for the carousel just customize it to be responsive.

```html
<!-- TESTIMONIAL SECTION -->
    <section class="testimonial">
       <h2>What they’ve said</h2>

       <div class="owl-carousel owl-theme">
      <div class="item">
            <div class="item-content">
                   <div class="testimonial_img"><img src="assets/images/avatar-anisha.png" alt="Anisha Li"></div>
            <div class="testimonial_name">Anisha Li</div>
            <div class="testimonial_desc">  “Manage has supercharged our team’s workflow. The ability to maintain  visibility on larger milestones at all times keeps everyone motivated.”</div>
            </div>
        </div>
            <div class="item">
                <div class="item-content">
                     <div class="testimonial_img"><img src="assets/images/avatar-ali.png" alt="Ali Bravi"></div>
                <div class="testimonial_name">Ali Bravo</div>
                <div class="testimonial_desc">  “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</div>
                </div>
            </div>

             <div class="item">
                <div class="item-content">
                           <div class="testimonial_img"><img src="assets/images/avatar-richard.png" alt="Richard Watts"></div>
                <div class="testimonial_name">Richard Watts</div>
                <div class="testimonial_desc">“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</div>
                </div>
            </div>

            <div class="item">
                <div class="item-content">
                    <div class="testimonial_img"><img src="assets/images/avatar-shanai.png" alt="Shanai Gough"></div>
                <div class="testimonial_name">Shanai Gough</div>
                <div class="testimonial_desc">“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</div>
                </div>
            </div> 
      </div>
    <div class="testimonial_btn center">
       <a href="#" class="btn_cta">Get Started</a>
    </div>
  </section>




```
```css
@use 'variables' as *;
@use 'mixins' as *;

.testimonial{
    margin: 0px 20px;
    padding-bottom: 50px;
    
    h2{
        text-align: center;
        padding-bottom: 50px;
    }
}

 .owl-carousel{
    @include breakpoints-up(large){
       padding: 10px 20px;
    }
  }
.owl-carousel span {
    width:10px;
    height:10px;
    margin:5px 7px;
    background: $VeryPaleRed !important;
    display:block;
    -webkit-backface-visibility:visible;
    -webkit-transition:opacity 200ms ease;
    -moz-transition:opacity 200ms ease;
    -ms-transition:opacity 200ms ease;
    -o-transition:opacity 200ms ease;
    transition:opacity 200ms ease;
    -webkit-border-radius:30px;
    -moz-border-radius:30px;
    border-radius:30px;
}

.owl-carousel .active span {
    background: $brightRed !important;
}
.owl-item{
margin-top: 90px;
   height: 350px;
   max-width: 100%;
 background: #FAFAFA;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 15%);
    transition: 2s;

}
 /*large devices*/
.testimonial_img{
  position: relative;
    bottom: 44px;
    left: 106px;
    width: 78px;
    height: 78px;
    margin-bottom: 7px;
}
 /*large devices*/
.item-content{
    text-align: center;
    padding: 0 30px;
}
.testimonial_name{
  font-weight: bolder;
  color: $VeryDarkBlue;
  margin-bottom: 30px;
}
.testimonial_desc{
  font-size: 0.875rem;
}
.testimonial_btn{
  margin-top: 50px;
}


```
```js
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    nav: false,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
            loop:true
        }
      }
  })
```




### Continued development

  I badly want to learn how to create responsive carousel without using plugin.
  I made one but the dots are moving when I resize the emulator.

### Useful resources

- [GRID GENERATOR](https://grid.layoutit.com/) - This helped me for fixing my grid layout. I really liked this generator because you will see the outcome of the layout without wasting time do coding to run for trial and error and will use it going forward.

- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) -This is a helpful JQuery plugin for carousel and slider it is easy to use and customizable.


## Author
- Frontend Mentor - [@Ericka-MaeMateo](frontendmentor.io/profile/erickamae-mateo)
- LinkedIn - [Ericka Mae Mateo](https://www.linkedin.com/in/ericka-mae-mateo-823a18129/)


# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

Bright Red: hsl(12, 88%, 59%)
Dark Blue: hsl(228, 39%, 23%)

### Neutral

Dark Grayish Blue: hsl(227, 12%, 61%)
Very Dark Blue: hsl(233, 12%, 13%)
Very Pale Red: hsl(13, 100%, 96%)
Vary Light Gray: hsl(0, 0%, 98%)

## Typography

### Body Copy

- Font size: 16px

### Font

- Family: [Be Vietnam](https://fonts.google.com/specimen/Be+Vietnam)
- Weights: 400, 500, 700

## Icons

For the social icons, you can use the icons provided or a font icon library. Some suggestions for font icon libraries can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)
