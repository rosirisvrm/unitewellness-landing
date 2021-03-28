import React from 'react'
import { makeStyles } from '@material-ui/core'

import Gradiente from '../images/gradiente2.png'
import Navbar from '../components/Navbar'
import FirstSection from '../components/FirstSection'
import InfoSection from '../components/InfoSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const useStyles = makeStyles(theme => ({
  container: {
    width:'100%',
    minHeight:'100vh',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${Gradiente})`,
    backgroundRepeat: 'repeat-y',
  },
}))

export default function Landing() {
  const classes = useStyles()

  const infoSection = [
    {
      title: 'Fitness',
      text1: 'United Wellness creates a community that inspires individuals to be the best version of themselves, by empowering people to take control of their lives.',
      text2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      textFirst: false,
    },
    {
      title: 'Nutrition',
      text1: 'United Wellness creates a community that inspires individuals to be the best version of themselves, by empowering people to take control of their lives.',
      text2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      textFirst: true,
    },
    {
      title: 'Mental Well Being',
      text1: 'United Wellness creates a community that inspires individuals to be the best version of themselves, by empowering people to take control of their lives.',
      text2: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      textFirst: false,
    }
  ]

  return (
    <div className={classes.container}>
      <Navbar />
      <FirstSection />
      {infoSection.length && infoSection.map((elem, index) => (
        <InfoSection key={index} textFirst={elem.textFirst} title={elem.title} text1={elem.text1} text2={elem.text2} />
      ))}
      <ContactSection />
      <hr style={{ border: '1px solid #707070', width: '85%' }} />
      <Footer />
    </div>
  );
}
