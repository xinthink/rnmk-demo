package com.github.xinthink.rnmk.demo;

import android.support.annotation.NonNull;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.github.xinthink.rnmk.ReactMaterialKitPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected @NonNull String getMainComponentName() {
        return "Example";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactNativeHost getReactNativeHost() {
                return new ReactNativeHost(getApplication()) {
                    @Override
                    protected boolean getUseDeveloperSupport() {
                        return BuildConfig.DEBUG;
                    }

                    @Override
                    protected List<ReactPackage> getPackages() {
                        return Arrays.asList(
                                new MainReactPackage(),
                                new ReactMaterialKitPackage()
                        );
                    }
                };
            }
        };
    }
}
