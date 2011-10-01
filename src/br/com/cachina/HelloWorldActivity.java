package br.com.cachina;

import com.phonegap.DroidGap;

import android.os.Bundle;

public class HelloWorldActivity extends DroidGap {
    /** Called when the activity is first created. */
    
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}