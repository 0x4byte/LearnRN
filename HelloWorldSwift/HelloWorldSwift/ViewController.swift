//
//  ViewController.swift
//  HelloWorldSwift
//
//  Created by huangyonglin on 2017/8/8.
//  Copyright © 2017年 HYL. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    @IBAction func ClickGoRN(_ sender: UIButton) {
        let vc = HelloWorldViewController()
        
        self.navigationController?.pushViewController(vc, animated: true)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

