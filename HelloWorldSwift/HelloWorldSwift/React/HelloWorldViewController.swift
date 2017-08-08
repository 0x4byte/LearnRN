//
//  HelloWorld.swift
//  HelloWorldSwift
//
//  Created by huangyonglin on 2017/8/8.
//  Copyright © 2017年 HYL. All rights reserved.
//

import UIKit
import React

class HelloWorldViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationController?.isNavigationBarHidden = true
        
        let jsCodeLocation = NSURL(string: "http://127.0.0.1:8081/index.ios.bundle")
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation! as URL,
            moduleName: "helloworld",
            initialProperties: nil,
            launchOptions: nil
        )
        
        self.view = rootView;
    }
}
