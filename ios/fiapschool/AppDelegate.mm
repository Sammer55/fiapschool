#import "AppDelegate.h"
#import "RNBootSplash.h" 

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];

  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView]; // <- initialization using the storyboard file name

  return YES;
}
