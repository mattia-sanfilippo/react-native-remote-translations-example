import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

export const Home = () => {
  const {t} = useTranslation();

  const todayDate = t('date', {date: new Date()});

  const translationsArray = t('arr', {returnObjects: true});

  const formattedTranslationArray = Object.values(translationsArray).map(
    translation => {
      return translation;
    },
  );

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.box}>
          <Text style={styles.title}>{t('home.title')}</Text>
          <Text style={styles.description}>{t('home.description')}</Text>
          <Text style={styles.description}>{todayDate}</Text>
        </View>
        <View style={styles.box}>
          {formattedTranslationArray.map((translation, index) => {
            return (
              <View key={index}>
                <Text>{translation}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});
