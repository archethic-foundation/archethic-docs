---
id: archethic-wallet
title: Archethic Wallet
---

**Archethic has developed a fully decentralized and non-custodial cryptocurrency hot wallet that enables users to safely manage assets on Layer 1 Archethic blockchain.**

**No signup or KYC needed, users just control their services and access keychain, protected by different secure access methods like PIN Code, Password, YubiKey like devices and Biometrics.**

## Features

Archethic Wallet has implemented the following features:
- Main features
    - Decentralized keychain management
    - Multiple accounts' management
    - Creation of Fungible Tokens
    - Creation of NFTs
    - Support for transactions (Sending and Receiving UCO Token, Fungible Tokens and NFTs)
    - List of recent transactions
    - List of acquired tokens
- Security
    - Security access with Password, PIN, Yubicloud OTP, Face ID, Touch ID, Uniris Biometrics (2023)
    - Use of 24 Words Mnemonics
- Customization
    - Support for English and French Language
    - Support for multiple Currencies (view only, not meant as multiple cryptocurrencies wallet)
    - Multi themes (9 themes available)
    - UI customization
- Other features
    - Local notifications
    - Access to exchanges to buy ERC20 UCO
    - Share address with QR Code or mobile share feature
    - Address book
    - UCO Price chart
    - Access latest Archethic blog articles

## Framework

Archethic developed the wallet using Flutter based on Dart language.
Flutter is an open-source mobile application development framework from Google. The main reason for its popularity is that it supports the creation of cross-platform applications. Flutter is also used to create interactive apps that run on web pages or on the desktop.

Here are some of Flutter's features*
- **Single code base for Android, iOS, Windows, Linux, macOS, Web, Extension**: This approach simplifies and reduces the development time, cost, and maintenance is also an easy task. The Flutter-based user interface can be installed virtually on any platform. It has its own rendering engine that allows developers to keep the UI as it is while moving to another platform. As a result, application users can enjoy an excellent native-like experience on various platforms.
- **Open-source and made by Google**: Flutter is a popular choice among developers because of the huge community support. Google designed the Flutter framework with all the security issues of modern applications in mind. One can find reliable and well-tested plugins in Flutter to mitigate security risks such as user authentication flaws, malicious code injections and data leaks.
- **Dart Programming**: Flutter uses an easy to learn and implement programming language called Dart, which is Google's general purpose programming language.
- **Performance**: As a cross-platform framework, Flutter offers unmatched performance compared to its competitors. Flutter compiles designs to native code. Unlike React Native, Flutter renders widgets directly from the native library rather than downloading libraries and components to the device before rendering.

*Source: https://mobiskill.fr/blog/conseils-emploi-tech/pourquoi-utiliser-flutter-en-2022/*

## Seed

When the wallet is created, a seed is randomly created from a cryptographically secure random number generator provided by Dart.

```dart
  static String generateSeed() {
    String result = '';
    const String chars = 'abcdef0123456789';
    final Random rng = Random.secure();
    for (int i = 0; i < 64; i++) {
      result += chars[rng.nextInt(chars.length)];
    }
    return result.toUpperCase();
  }
```

In order to make the seed more accessible, BIP39 is used and aims to provide a method of simplifying the reading of the seed using a series of mnemonic words. BIP39 takes random words (usually from the English language, although they can be from another language) and creates a long phrase with them, usually 12 to 24 words. In the case of the Archethic wallet, we use 24 words because the higher the number of words, the greater the entropy and security attributable to the resulting sentence. These words are chosen from a dictionary of 2048 words. The flutter library bip39_mnemonic is thus used with English and French dictionaries.

In the case of wallet restoration, the library bip39_mnemonic allows to find the seed from the seed phrase.

## Securing the application

Access to the application and interactions with the blockchain are secured so that certain actions are not done beyond the user's control.
Following are the ways to access:
- by **PIN code**, comprising of 6 digits, with the possibility to mix the numbers of the keyboard to reduce the risks of access to your code by observation,
- by **password**,
- by using a **YubiKey**, it is an electronic authentication device to secure your access. Whether you are using NFC with your mobile or USB on your desktop, you can identify yourself with this key,
- by the **touch ID or face ID system**, depending on your device capabilities.

In the case of **PIN** and **password**, authentication information is stored locally (see "What data is stored in my device?").
In the case of **touch ID or Face ID**, the [Flutter Local Auth library](https://pub.dev/packages/local_auth) provides the means to authenticate on devices supporting fingerprint or facial recognition authentication.
Finally, for **OTP via Yubicloud**: Yubico OTP is a simple yet strong authentication mechanism that is supported by all **YubiKeys** out of the box. Yubico OTP can be used as the second factor in a 2-factor authentication scheme or on its own, providing 1-factor authentication. [YubiCloud](https://www.yubico.com/products/yubicloud/) is the name of Yubico’s web service for verifying OTPs. Before using YubiCloud, you need to get an API key from [here](https://upgrade.yubico.com/getapikey/) - it is quick, free and helps us in preventing misuse of YubiCloud. 

## Data store

Archethic Wallet stores a set of information so that the application is functional in both online and offline mode.

The first group of information represents the globally available user preferences:
- **First Launch: Allows to know if this is the first launch of the application in order to clear the keystore for iOS. Indeed, iOS key store is persistent, so if this is first launch then we will clear the keystore.
- **Authentification Method**: Allows to know which authentication mode is used (PIN, password, YubiKey, biometrics).
- **Current Currency**: Allows you to know what currency is used in the application.
- **Current Language**: Allows you to know which language is used in the application.
- **Current Primary Setting**: Allows to know if the currency displayed in priority is Fiat or Crypto.
- **Current Network**: Allows to know if the wallet is connected to mainnet, testnet or to a local node whose endpoint is recorded in the following information.
- **Current Network Endpoint**: Allows to know the address of the local node.
- **Current Theme**: Allows to know which theme is used in the application.
- **Lock**: Allows to know if it is necessary to authenticate at the launching of the application.
- **Lock Timeout**: Allows to know after how long the application requires authentication at its launch if the user has left the application open to browse for another one for example.
- **Pin Pad Shuffle**: Allows you to determine whether the PIN code keyboard should be shuffled when entering.
- **Show Balances**: Allows you to determine if the financial information should be displayed.
- **Show Blog**: Allows you to know which blog articles should be displayed.
- **Show Price Chart**: Allows you to determine whether the graph and indicators of the UCO price chart should be displayed.
- **Active Vibrations**: Allows to know if at each action, a small vibration is emitted on the mobiles.
- **Active Notifications**: Allows to know if the notifications of reception of UCO are active or not.
- **Language Seed**: Allows to know if the seed phrase is composed of French or English words.

The second group of information represents the sensitive elements related to security:
- **Seed**: Allows to store the wallet seed needed to perform transactions on the Archethic blockchain.
- **PIN**: Allows to store the PIN code in case this authentication method has been chosen.
- **Password**: Allows to keep the password in case this authentication method has been chosen.
- **Yubicloud ID and API Key**: Allows to keep the authentication information for the management of the OTP with the YubiKey in case this authentication method has been chosen.
This information is stored securely.
- And finally, **a secure 256-bit (32 bytes) encryption key** to secure data on the disk.

:::info
Remember that Archethic will never pass on your data to a third party or use your data in any other way than that offered by the application
:::

**In the case of user preference data**, we made the choice to store it in a local database [Hive](https://pub.dev/packages/hive) rather than the Flutter object [SharedPreferences](https://pub.dev/packages/shared_preferences) for performance reasons. All the information is available in this [medium article](https://medium.com/flutter-community/using-hive-instead-of-sharedpreferences-for-storing-preferences-2d98c9db930f).
These data are stored in clear text because they are not sensitive.

**On the other hand, the information related to security management must be protected.** Here again, Hive is used but the stored values are encrypted. Hive provides a helper function to generate a secure encryption key using the [Fortuna](https://en.wikipedia.org/wiki/Fortuna_%28PRNG%29) random number generator.
The key is stored base64 encoded in a secure space via the [FlutterSecureStorage library](https://pub.dev/packages/flutter_secure_storage).

```dart
static Future<Vault> getInstance() async {
    try {
      const FlutterSecureStorage secureStorage = FlutterSecureStorage();
      final Uint8List encryptionKey;
      String? secureKey =
          await secureStorage.read(key: 'archethic_wallet_secure_key');
      if (secureKey == null || secureKey.isEmpty) {
        final List<int> key = Hive.generateSecureKey();
        encryptionKey = Uint8List.fromList(key);
        secureKey = base64UrlEncode(key);
        await secureStorage.write(
            key: 'archethic_wallet_secure_key', value: secureKey);
      } else {
        encryptionKey = base64Url.decode(secureKey);
      }
      final Box<dynamic> encryptedBox = await Hive.openBox<dynamic>(_vaultBox,
          encryptionCipher: HiveAesCipher(encryptionKey));
      return Vault._(encryptedBox);
    } catch (e) {
      dev.log(e.toString());
      throw Exception();
    }
  }
```

## Interactions with the Archethic blockchain

Based on the Archethic JS SDK, [**a SDK has been developed in dart**](/docs/build/sdk/dart.md) and is maintained by the Archethic teams in order to offer internal or community-developed Flutter DApps to interact with the Archethic Blockchain.

This open-source SDK **"archethic_lib_dart"**, available on [GitHub](https://github.com/archethic-foundation/libdart), can be added as dependencies in Dart or Flutter projects via the Flutter libraries and packages sharing site [Pub.dev](https://pub.dev/).


## Setup

### Pre-requisites
- Flutter 3.0+
- Dart 2.17+

### Instructions
- Download the [repo](https://github.com/archethic-foundation/archethic-wallet) into a folder
- Goto the folder and from terminal run `flutter pub get` to get the packages
- Once packages are installed 
    - You can build and run the program for emulator from VSCode Flutter SDK Tools
    - You can build for android emulator if already installed.
- Once the packages and installed and application is built
- Run the program with `flutter run`
