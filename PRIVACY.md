# Privacy

**DISCLAIMER**: This is **not** a set of legally binding statements about the software, as this is an open source project which builds on other projects.  It **is** a 'good faith' statement of intent around what data the program may manipulate, where it will be stored, and what for what that data will be used.

## Data Stored By The Application

This program requires you to provide, and stores, three (3) primary pieces of authentication data:
1. Username
2. Password
3. An ephemeral user 'session' which is used to log back into TikTok and execute the blocklist.

It stores this data in two places:
1. A `.env` file, should you chose to use it.
    1. This file will contain username and password information.
    2. It is used for the initial 'automated' login process to capture your ephemeral authentication credentials.  After this process is complete, you can delete this file to remove your username and password.  You *may* have to fill it out again and use it again in the case you want to run the program at some future point after your 'ephemeral' credentials become stale.
    3. This file is never sent anywhere by us.  However, the username and password stored within **are** sent to the TikTok server for initial authentication.
2. A `playwright/.auth/user.json` file, in the project directory itself.
    1. This file stores the ephemerial credentials used to log in after your first credential 'capture'. It's used for the 'true' authentication step when the blocklist is actually run.
    2. You can delete this file to destroy any stored credentials.
    3. This file is never sent anywhere by us.  The data in this file is submitted to the TikTok authentication servers to authenticate you while the blocklist program is executed.

## Data Not Stored Nor Shared By The Application

This application does not capture, store, or transmit (this is an incomplete list):
1. Personal Information
2. Data about your account, such as profile, follower, or following data.

Additionally, and crucially, this application does **not** transmit nor transfer the above authentication data to any party or server except as expressly identified above in contacting the TikTok authentication services and blocklist execution.
