import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

export const Home = () => {
  const {t} = useTranslation();

  const translationsArray = t('arr', {returnObjects: true});

  const formattedTranslationArray = Object.values(translationsArray).map(
    translation => {
      return translation;
    },
  );

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.title}>{t('home.title')}</Text>
          <Text style={styles.description}>{t('home.description')}</Text>
        </View>
        {formattedTranslationArray.map((translation, index) => {
          return (
            <View key={index}>
              <Text>{translation}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});
