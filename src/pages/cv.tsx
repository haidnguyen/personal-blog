import { Skills, TimeSpanItem } from '@app/blocks/resume';
import { SEO } from '@app/components';
import { CalendarIcon, EmailIcon, LinkIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, GridItem, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { GitHub } from 'react-feather';

import picture from '../../static/1606668897858.jpg';

const CV = () => {
  return (
    <>
      <SEO title='Resume' />
      <Flex
        bgGradient='linear(to-br, purple.600, pink.200)'
        minH='100vh'
        p={8}
        justify='center'
        className='print-container'
      >
        <VStack bg='white' w='full' maxW='800px' spacing={6} align='stretch'>
          <Flex pt={6} px={6}>
            <Grid templateColumns='repeat(5, 1fr)' w='full'>
              <GridItem
                colSpan={3}
                d='flex'
                alignItems='center'
                pos='relative'
                _before={{
                  pos: 'absolute',
                  content: '""',
                  w: '164px',
                  h: '132px',
                  top: 0,
                  left: '-12px',
                  borderTop: '1px solid',
                  borderColor: 'pink.200',
                }}
                _after={{
                  pos: 'absolute',
                  content: '""',
                  w: 'full',
                  h: '142px',
                  top: '-12px',
                  left: 0,
                  borderLeft: '1px solid',
                  borderColor: 'pink.200',
                }}
              >
                <Box
                  pos='relative'
                  overflow='hidden'
                  transform='rotate(45deg)'
                  w='96px'
                  h='96px'
                  mr={4}
                  display='none'
                  _before={{
                    content: '""',
                    w: '100%',
                    h: '100%',
                    top: '0',
                    left: '0',
                    pos: 'absolute',
                    backgroundImage: `url(${picture})`,
                    backgroundSize: 'cover',
                    transform: 'rotate(-45deg)',
                    borderRadius: '2.3rem',
                  }}
                >
                  &nbsp;
                </Box>

                <VStack align='stretch' p={4}>
                  <Text color='pink.600' fontSize='xl' fontWeight='semibold'>
                    Nguyen Dinh Hai
                  </Text>
                  <Text color='gray.600' fontSize='sm'>
                    Software Engineer
                  </Text>
                  <Text color='gray.600' fontSize='sm'>
                    <CalendarIcon color='pink.600' mr={2} /> 28/01/1997
                  </Text>
                </VStack>
              </GridItem>
              <GridItem colSpan={2} d='flex'>
                <VStack align='stretch' pt={4}>
                  <Text color='gray.600' fontSize='sm' as='a' href='mailto:dinhhai281@gmail.com'>
                    <EmailIcon color='pink.600' mr={2} /> dinhhai281@gmail.com
                  </Text>
                  <Text color='gray.600' fontSize='sm' letterSpacing={1}>
                    <PhoneIcon color='pink.600' mr={2} /> (+84) 0886 511 763
                  </Text>
                  <Text color='gray.600' fontSize='sm' as='a' href='https://haidnguyen.dev' target='__blank'>
                    <LinkIcon color='pink.600' mr={2} /> haidnguyen.dev
                  </Text>
                  <Text color='gray.600' fontSize='sm' as='a' href='https://github.com/haidnguyen' target='__blank'>
                    <Icon as={GitHub} color='pink.600' mr={2} /> github.com/haidnguyen
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          </Flex>
          <VStack spacing={2} align='stretch' px={6}>
            <Text color='pink.600' fontWeight='semibold'>
              About me
            </Text>
            <Text color='gray.600' fontSize='sm'>
              I mostly do front-end development with React and Angular. While having a great passion for Functional
              Programming and Reactive Programming, I always try to apply that knowledge to deliver high-quality code
              and I never stop learning to make myself better every day.
            </Text>
          </VStack>
          <VStack
            spacing={2}
            align='stretch'
            px={6}
            pos='relative'
            _before={{
              pos: 'absolute',
              content: '""',
              w: '140px',
              h: '142px',
              bottom: '12px',
              right: '12px',
              borderBottom: '1px solid',
              borderColor: 'pink.200',
            }}
            _after={{
              pos: 'absolute',
              content: '""',
              w: '164px',
              h: '162px',
              bottom: 0,
              right: '24px',
              borderRight: '1px solid',
              borderColor: 'pink.200',
            }}
          >
            <Text color='pink.600' fontWeight='semibold'>
              Experience
            </Text>
            <VStack align='stretch' spacing={0}>
              <TimeSpanItem
                bulletColor='pink.400'
                lineColor='pink.400'
                organization='Retail IQ'
                period='April 2021 - Present'
                title='Front-end Developer'
                tech='Javascript, Typescript, React, ...'
                description='Take care multiple products of Retail team at Tiki, refactor and improve existing front-end code base quality.'
                url='tiki.vn'
                company='Tiki Corporation'
                jobTitle='Senior Software Engineer'
              />
              <TimeSpanItem
                bulletColor='pink.400'
                lineColor='pink.400'
                organization='Katalon'
                period='Nov 2020 - Feb 2021'
                title='Fullstack Developer'
                tech='Typescript, Kotlin, React, Quarkus, Redux, ...'
                description='Apply and share to team member about state management best practices for front-end, also implement features from back-end to front-end on a customer-facing license management web application.'
                url='katalon.com'
                company='KMS Technology'
                jobTitle='Senior Software Engineer'
              />
              <TimeSpanItem
                bulletColor='pink.400'
                lineColor='pink.400'
                organization='Elemica'
                period='Nov 2019 - Jan 2021'
                title='Front-end Developer'
                tech='Typescript, Angular, Ngrx, RxJS, ...'
                description='Review code and provide guidelines for front-end implementation, conduct technical sharing for the team about  Angular, Reactive Programming, State Management'
                url='elemica.com'
                company='KMS Technology'
                jobTitle='Senior Software Engineer'
              />
              <TimeSpanItem
                bulletColor='pink.400'
                lineColor='pink.400'
                organization='Christinas'
                period='Aug 2019 - Nov 2019'
                title='Front-end Developer'
                tech='Javascript, React, Redux, ...'
                description='Analyze and implement features base on design specification, work heavily on application animation.'
                url='christinas.vn'
                company='KMS Technology'
                jobTitle='Software Engineer'
              />
            </VStack>
          </VStack>
          <Grid
            flexGrow={1}
            templateColumns='repeat(4, 1fr)'
            bgColor='pink.500'
            px={4}
            py={3}
            rowGap={2}
            style={{ marginTop: 4 }}
          >
            <GridItem colSpan={2}>
              <Text color='whiteAlpha.900'>Skills</Text>
              <Skills
                items={[
                  'Typescript',
                  'Javascript',
                  'HTML & CSS/SCSS/PostCSS',
                  'React',
                  'Angular',
                  'Redux/NgRx',
                  'RxJS',
                  'Node.js',
                ]}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Text color='whiteAlpha.900'>Recognitions</Text>
              <Text fontSize='xs' color='whiteAlpha.900'>
                Become Trainer of Angular at KMS Technology Frontend Guild (2020)
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <Text color='whiteAlpha.900'>Educations</Text>
              <Text fontSize='xs' color='whiteAlpha.900'>
                Bachelor of Software Engineering - GPA: 8.03
              </Text>
              <Text fontSize='xs' color='whiteAlpha.900'>
                University of Science Ho Chi Minh City
              </Text>
            </GridItem>

            <GridItem colSpan={1}>
              <Text color='whiteAlpha.900'>Languages</Text>
              <Text fontSize='xs' color='whiteAlpha.900'>
                English (Toeic 730 - 2019)
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Text color='whiteAlpha.900'>Interests</Text>
              <Text fontSize='xs' color='whiteAlpha.900'>
                Cryptocurrency, Keyboard, Functional Programming
              </Text>
            </GridItem>
          </Grid>
        </VStack>
      </Flex>
    </>
  );
};

export default CV;
