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
    backgroundRepeat: 'round',
  },
}))

export default function Landing() {
  const classes = useStyles()

  const infoSection = [
    {
      title: 'Fitness',
      text1: 'Your goal is to take your body to its best potential. Learn from fitness professionals new workouts from the of your surroundings.',
      text2: '',
      textFirst: false,
    },
    {
      title: 'Nutrition',
      text1: 'Your goal is to take your nutritional health seriously. Learn new ways from our experts to take the stress out of cooking.',
      text2: '',
      textFirst: true,
    },
    {
      title: 'Mental Well Being',
      text1: 'Do you want to take back the reigns on your life? Our Coaches will help you reduce stress and refocus your mindset.',
      text2: '',
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
