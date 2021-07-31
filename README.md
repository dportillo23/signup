# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)



## Overview

I used React and Hooks to complete this challenge

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Desktop View]('./public/Screenshots/Desktop-view.png')
![Active State View]('./public/Screenshots/Active_state.png')
![Mobile View]('./public/Screenshots/Moblie-view')

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [GitHub page](https://dportillo23.github.io/signup-app/)

## My process

### Built with

- Sass
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learned a lot about how to validate and handle validations with React and it helped me to practice functions, logical expressions and more

You can find below some snippets of my code, especially some form exampls and how I validated the data and an input example:


```jsx
    const formValidation = (data) => {

        for (const [key, value] of Object.entries(data))  {
            if (!value) {
                setErrors(prev => ({
                    ...prev,
                    [key]: true,
                }))
            }
        }
    }

    <input className={(errors.email || errors.emailPattern) && "invalid"} type="email" placeholder="Email Address" id="email" name="email" value={formData.email} onChange={handleChange}/>
                {errors.email && <span className="error">Email cannot be empty</span>}
                {errors.emailPattern && <span className="error">Looks like this is not an email</span>}
```

### Continued development

React and Hooks are still a challenge for me, I'm glad to be improving and I know I still need to develop my knowledge in react, and hooks.

### Useful resources

- [React Hook Form Tutorial | Why It's Useful from Redhwan Nacef](https://www.youtube.com/watch?v=PcrrJ0BOFGw) - This video is awesome, he explains how to use UseState to validate the data. Afterwards, he uses React hook form, however I kept working with the first method of using useState.

## Author

- Website - [Daniel Portillo](https://dportillo23.github.io/My-Personal-Site/)
- Frontend Mentor - [@dportillo23](https://www.frontendmentor.io/profile/dportillo23)
- GitHub- [dportillo23](https://github.com/dportillo23)
