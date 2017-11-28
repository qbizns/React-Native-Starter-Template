package com.tatx.clientapp;

import android.support.multidex.MultiDex;
import android.content.Context;

import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.wheelpicker.WheelPickerPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.marianhello.react.BackgroundGeolocationPackage;
import com.brentvatne.react.ReactVideoPackage;
import io.invertase.firebase.RNFirebasePackage;
// optional packages - add/remove as appropriate
import io.invertase.firebase.admob.RNFirebaseAdMobPackage; //Firebase AdMob
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage; // Firebase Analytics
import io.invertase.firebase.auth.RNFirebaseAuthPackage; // Firebase Auth
import io.invertase.firebase.config.RNFirebaseRemoteConfigPackage; // Firebase Remote Config
import io.invertase.firebase.crash.RNFirebaseCrashPackage; // Firebase Crash Reporting
import io.invertase.firebase.database.RNFirebaseDatabasePackage; // Firebase Realtime Database
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage; // Firebase Firestore
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; // Firebase Cloud Messaging
import io.invertase.firebase.perf.RNFirebasePerformancePackage; // Firebase Performance
import io.invertase.firebase.storage.RNFirebaseStoragePackage; // Firebase Storage

import com.corbt.keepawake.KCKeepAwakePackage;
import com.arttitude360.reactnative.rngoogleplaces.RNGooglePlacesPackage;
import com.imagepicker.ImagePickerPackage;
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.avishayil.rnrestart.ReactNativeRestartPackage;
import com.zmxv.RNSound.RNSoundPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    // Add the packages you require here.
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
      new WheelPickerPackage(),
      new VectorIconsPackage(),
      new LinearGradientPackage(),
      new MapsPackage(),
      new BackgroundGeolocationPackage(),
      new ReactVideoPackage(),
      new RNFirebasePackage(),
      // add/remove these packages as appropriate
      new RNFirebaseAdMobPackage(),
      new RNFirebaseAnalyticsPackage(),
      new RNFirebaseAuthPackage(),
      new RNFirebaseRemoteConfigPackage(),
      new RNFirebaseCrashPackage(),
      new RNFirebaseDatabasePackage(),
      new RNFirebaseFirestorePackage(),
      new RNFirebaseMessagingPackage(),
      new RNFirebasePerformancePackage(),
      new RNFirebaseStoragePackage(),
      new KCKeepAwakePackage(),
      new RNGooglePlacesPackage(),
      new ImagePickerPackage(),
      new ReactNativeLocalizationPackage(),
      new ReactNativeRestartPackage(),
      new RNSoundPackage()
    );
  }

  @Override
  protected void attachBaseContext(Context base) {
    super.attachBaseContext(base); 
    MultiDex.install(this);
  }
}
